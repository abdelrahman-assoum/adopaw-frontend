export interface Pet {
  id: string;
  name: string;
  breed: string;
  age: string;
  location: string;
  imageUrl: string;
  category: string;
  size: string;
  gender: 'male' | 'female';
  description: string;
}

export interface PetFilters {
  category?: string;
  age?: string;
  size?: string;
  gender?: string;
  searchQuery?: string;
}

export interface FilterOptions {
  age: 'all' | 'puppy' | 'young' | 'adult' | 'senior';
  size: 'all' | 'small' | 'medium' | 'large';
  gender: 'all' | 'male' | 'female';
}

// Mock data for development - replace with actual API calls
const mockPets: Pet[] = [
  {
    id: '1',
    name: 'Lucy',
    breed: 'Mixed Breed',
    age: '1 year old',
    location: '15 km',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400',
    category: 'cat',
    size: 'small',
    gender: 'female',
    description: 'Beautiful white and orange cat with a gentle personality.',
  },
  {
    id: '2',
    name: 'Catcout',
    breed: 'Persian',
    age: '2 month old',
    location: '7 km',
    imageUrl: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400',
    category: 'cat',
    size: 'small',
    gender: 'male',
    description: 'Adorable brown tabby kitten looking for a loving home.',
  },
  {
    id: '3',
    name: 'Amber',
    breed: 'Conure',
    age: '3 months old',
    location: '15 km',
    imageUrl: 'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?w=400',
    category: 'bird',
    size: 'small',
    gender: 'male',
    description: 'Beautiful yellow and white cockatiel with a friendly nature.',
  },
  {
    id: '4',
    name: 'Bella',
    breed: 'Mixed Breed',
    age: '1 year old',
    location: '5 km',
    imageUrl: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400',
    category: 'dog',
    size: 'medium',
    gender: 'female',
    description: 'Lovely black, white, and brown dog with a sweet temperament.',
  },
  {
    id: '5',
    name: 'Max',
    breed: 'Golden Retriever',
    age: '6 months old',
    location: '10 km',
    imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400',
    category: 'dog',
    size: 'large',
    gender: 'male',
    description: 'Playful golden retriever puppy full of energy and love.',
  },
  {
    id: '6',
    name: 'Junior',
    breed: 'Mixed Breed',
    age: '1 month old',
    location: '15 km',
    imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400',
    category: 'cat',
    size: 'small',
    gender: 'female',
    description: 'Tiny tabby kitten with striking blue eyes and a curious nature.',
  },
];

export const petCategories = [
  { id: 'all', name: 'All Pets', icon: 'pawprint.fill', emoji: '🐾' },
  { id: 'cat', name: 'Cat', icon: 'cat.fill', emoji: '🐱' },
  { id: 'dog', name: 'Dog', icon: 'dog.fill', emoji: '🐕' },
  { id: 'rabbit', name: 'Rabbit', icon: 'hare.fill', emoji: '🐰' },
  { id: 'fish', name: 'Fish', icon: 'fish.fill', emoji: '🐟' },
  { id: 'bird', name: 'Bird', icon: 'bird.fill', emoji: '🐦' },
];

class PetService {
  private baseUrl = 'https://api.adopaw.com'; // Replace with your actual API URL

  async getPets(filters?: PetFilters): Promise<Pet[]> {
    try {
      // For now, return mock data
      // In production, replace with actual API call:
      // const response = await fetch(`${this.baseUrl}/pets?${new URLSearchParams(filters)}`);
      // return response.json();

      let filteredPets = [...mockPets];

      if (filters) {
        if (filters.category && filters.category !== 'all') {
          filteredPets = filteredPets.filter(pet => pet.category === filters.category);
        }

        if (filters.age) {
          filteredPets = filteredPets.filter(pet => {
            const age = pet.age.toLowerCase();
            return age.includes(filters.age!.toLowerCase());
          });
        }

        if (filters.size) {
          filteredPets = filteredPets.filter(pet => pet.size === filters.size);
        }

        if (filters.gender) {
          filteredPets = filteredPets.filter(pet => pet.gender === filters.gender);
        }

        if (filters.searchQuery) {
          const query = filters.searchQuery.toLowerCase();
          filteredPets = filteredPets.filter(pet =>
            pet.name.toLowerCase().includes(query) ||
            pet.breed.toLowerCase().includes(query) ||
            pet.location.toLowerCase().includes(query)
          );
        }
      }

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));

      return filteredPets;
    } catch (error) {
      console.error('Error fetching pets:', error);
      throw new Error('Failed to fetch pets');
    }
  }

  async getPetById(id: string): Promise<Pet | null> {
    try {
      // For now, return mock data
      // In production, replace with actual API call:
      // const response = await fetch(`${this.baseUrl}/pets/${id}`);
      // return response.json();

      const pet = mockPets.find(p => p.id === id);
      return pet || null;
    } catch (error) {
      console.error('Error fetching pet:', error);
      throw new Error('Failed to fetch pet');
    }
  }

  async getCategories() {
    return petCategories;
  }
}

export const petService = new PetService(); 