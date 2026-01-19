'use client'

import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '@/lib/firebase';
import { FaPlus, FaEdit, FaTrash, FaSignOutAlt, FaImage } from 'react-icons/fa';

const ADMIN_USERNAME = 'legassyAdmin';
const ADMIN_PASSWORD = 'LegassyAdmin1234';

export default function AdminPodcastPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  
  const [formData, setFormData] = useState({
    number: '',
    date: '',
    title: '',
    description: '',
    image: '',
    watchLink: '',
    listenLink: '',
    readMore: '',
    readMoreText: 'READ MORE'
  });

  useEffect(() => {
    // Check if authenticated in sessionStorage
    const auth = sessionStorage.getItem('adminAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      loadEpisodes();
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuth', 'true');
      loadEpisodes();
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuth');
    setEpisodes([]);
    setFormData({
      number: '',
      date: '',
      title: '',
      description: '',
      image: '',
      watchLink: '',
      listenLink: '',
      readMore: '',
      readMoreText: 'READ MORE'
    });
    setIsEditing(null);
    setIsAdding(false);
  };

  const loadEpisodes = async () => {
    try {
      setLoading(true);
      const episodesRef = collection(db, 'podcasts');
      const q = query(episodesRef, orderBy('number', 'desc'));
      const querySnapshot = await getDocs(q);
      const episodesData = [];
      querySnapshot.forEach((doc) => {
        episodesData.push({ id: doc.id, ...doc.data() });
      });
      setEpisodes(episodesData);
    } catch (error) {
      console.error('Error loading episodes:', error);
      setError('Failed to load episodes');
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async () => {
    if (!imageFile) return null;
    
    try {
      const imageRef = ref(storage, `podcasts/${Date.now()}_${imageFile.name}`);
      await uploadBytes(imageRef, imageFile);
      const downloadURL = await getDownloadURL(imageRef);
      return downloadURL;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      let imageUrl = formData.image;

      // Upload new image if file is selected
      if (imageFile) {
        imageUrl = await uploadImage();
      }

      const episodeData = {
        ...formData,
        image: imageUrl,
        number: parseInt(formData.number) || 0,
        updatedAt: new Date().toISOString()
      };

      if (isEditing) {
        // Update existing episode
        const episodeRef = doc(db, 'podcasts', isEditing);
        await updateDoc(episodeRef, episodeData);
      } else {
        // Add new episode
        episodeData.createdAt = new Date().toISOString();
        await addDoc(collection(db, 'podcasts'), episodeData);
      }

      // Reset form
      setFormData({
        number: '',
        date: '',
        title: '',
        description: '',
        image: '',
        watchLink: '',
        listenLink: '',
        readMore: '',
        readMoreText: 'READ MORE'
      });
      setImageFile(null);
      setImagePreview('');
      setIsEditing(null);
      setIsAdding(false);
      
      // Reload episodes
      loadEpisodes();
    } catch (error) {
      console.error('Error saving episode:', error);
      setError('Failed to save episode');
    }
  };

  const handleEdit = (episode) => {
    setIsEditing(episode.id);
    setIsAdding(true);
    setFormData({
      number: episode.number?.toString() || '',
      date: episode.date || '',
      title: episode.title || '',
      description: episode.description || '',
      image: episode.image || '',
      watchLink: episode.watchLink || '',
      listenLink: episode.listenLink || '',
      readMore: episode.readMore || '',
      readMoreText: episode.readMoreText || 'READ MORE'
    });
    setImagePreview(episode.image || '');
    setImageFile(null);
  };

  const handleDelete = async (episodeId, imageUrl) => {
    if (!confirm('Are you sure you want to delete this episode?')) return;

    try {
      // Delete from Firestore
      await deleteDoc(doc(db, 'podcasts', episodeId));

      // Delete image from Storage if it exists
      if (imageUrl && imageUrl.includes('firebasestorage')) {
        try {
          const imageRef = ref(storage, imageUrl);
          await deleteObject(imageRef);
        } catch (storageError) {
          console.error('Error deleting image:', storageError);
        }
      }

      loadEpisodes();
    } catch (error) {
      console.error('Error deleting episode:', error);
      setError('Failed to delete episode');
    }
  };

  const handleCancel = () => {
    setFormData({
      number: '',
      date: '',
      title: '',
      description: '',
      image: '',
      watchLink: '',
      listenLink: '',
      readMore: '',
      readMoreText: 'READ MORE'
    });
    setImageFile(null);
    setImagePreview('');
    setIsEditing(null);
    setIsAdding(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A14E05]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A14E05]"
                required
              />
            </div>
            {error && <div className="text-red-500 mb-4 text-sm">{error}</div>}
            <button
              type="submit"
              className="w-full bg-[#A14E05] text-white py-2 rounded-md hover:bg-orange-800 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">Podcast Admin</h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          {!isAdding && (
            <button
              onClick={() => setIsAdding(true)}
              className="flex items-center gap-2 px-4 py-2 bg-[#A14E05] text-white rounded-md hover:bg-orange-800 transition-colors mb-6"
            >
              <FaPlus /> Add New Episode
            </button>
          )}

          {isAdding && (
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h2 className="text-2xl font-bold mb-4">
                {isEditing ? 'Edit Episode' : 'Add New Episode'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Episode Number</label>
                    <input
                      type="number"
                      value={formData.number}
                      onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A14E05]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Date (e.g., 1.7.2026)</label>
                    <input
                      type="text"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A14E05]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A14E05]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A14E05] h-32"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Image (Square Thumbnail - 200x200 recommended)</label>
                  {imagePreview && (
                    <div className="mb-2">
                      <img src={imagePreview} alt="Preview" className="w-[200px] h-[200px] object-cover rounded-lg border border-gray-300" />
                    </div>
                  )}
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 transition-colors">
                      <FaImage /> Choose Image
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                    {!imageFile && formData.image && (
                      <span className="text-sm text-gray-600">Current image URL in use</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Watch Link (optional)</label>
                    <input
                      type="url"
                      value={formData.watchLink}
                      onChange={(e) => setFormData({ ...formData, watchLink: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A14E05]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Listen Link (optional)</label>
                    <input
                      type="url"
                      value={formData.listenLink}
                      onChange={(e) => setFormData({ ...formData, listenLink: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A14E05]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Read More Link (optional)</label>
                  <input
                    type="url"
                    value={formData.readMore}
                    onChange={(e) => setFormData({ ...formData, readMore: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A14E05]"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#A14E05] text-white rounded-md hover:bg-orange-800 transition-colors"
                  >
                    {isEditing ? 'Update' : 'Add'} Episode
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Episodes ({episodes.length})</h2>
            {episodes.length === 0 ? (
              <p className="text-gray-500">No episodes yet. Add your first episode above.</p>
            ) : (
              <div className="space-y-4">
                {episodes.map((episode) => (
                  <div key={episode.id} className="border border-gray-300 rounded-lg p-4 bg-white">
                    <div className="flex items-start gap-4">
                      {episode.image && (
                        <img
                          src={episode.image}
                          alt={episode.title}
                          className="w-[200px] h-[200px] object-cover rounded-lg flex-shrink-0"
                        />
                      )}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm text-gray-600">{episode.date}</span>
                          <span className="text-sm font-medium text-gray-600">EP - {episode.number}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{episode.title}</h3>
                        <p className="text-gray-600 text-sm line-clamp-2">{episode.description}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(episode)}
                          className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                          title="Edit"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(episode.id, episode.image)}
                          className="p-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                          title="Delete"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
