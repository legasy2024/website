'use client'

import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import EpisodeList from './EpisodeList/EpisodeList';

export default function FirestoreEpisodes() {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEpisodes = async () => {
      try {
        const episodesRef = collection(db, 'podcasts');
        const q = query(episodesRef, orderBy('number', 'desc'));
        const querySnapshot = await getDocs(q);
        const episodesData = [];
        querySnapshot.forEach((doc) => {
          episodesData.push({ 
            id: doc.id, 
            ...doc.data(),
            // Ensure number is a string for display
            number: doc.data().number?.toString() || ''
          });
        });
        setEpisodes(episodesData);
      } catch (error) {
        console.error('Error loading episodes:', error);
        setEpisodes([]);
      } finally {
        setLoading(false);
      }
    };

    loadEpisodes();
  }, []);

  if (loading) {
    return (
      <div className="w-full max-w-6xl mx-auto px-4 py-8 bg-white">
        <p className="text-center text-gray-500">Loading episodes...</p>
      </div>
    );
  }

  return <EpisodeList episodes={episodes} />;
}
