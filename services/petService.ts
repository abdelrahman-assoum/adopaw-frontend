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

// Mock data for development - replace with actual API calls
const mockPets: Pet[] = [
  {
    id: '1',
    name: 'Buddy',
    breed: 'Golden Retriever',
    age: '2 years',
    location: 'New York, NY',
    imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400',
    category: 'dog',
    size: 'large',
    gender: 'male',
    description: 'Friendly and energetic Golden Retriever looking for an active family.',
  },
  {
    id: '2',
    name: 'Luna',
    breed: 'Persian Cat',
    age: '1 year',
    location: 'Los Angeles, CA',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400',
    category: 'cat',
    size: 'small',
    gender: 'female',
    description: 'Beautiful Persian cat with a calm and gentle personality.',
  },
  {
    id: '3',
    name: 'Max',
    breed: 'Labrador Retriever',
    age: '3 years',
    location: 'Chicago, IL',
    imageUrl: 'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?w=400',
    category: 'dog',
    size: 'large',
    gender: 'male',
    description: 'Playful and loyal Labrador who loves water and outdoor activities.',
  },
  {
    id: '4',
    name: 'Bella',
    breed: 'Siamese Cat',
    age: '2 years',
    location: 'Miami, FL',
    imageUrl: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400',
    category: 'cat',
    size: 'small',
    gender: 'female',
    description: 'Elegant Siamese cat with striking blue eyes and a talkative nature.',
  },
  {
    id: '5',
    name: 'Rocky',
    breed: 'German Shepherd',
    age: '4 years',
    location: 'Seattle, WA',
    imageUrl: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400',
    category: 'dog',
    size: 'large',
    gender: 'male',
    description: 'Intelligent and protective German Shepherd, great for families.',
  },
  {
    id: '6',
    name: 'Milo',
    breed: 'Maine Coon',
    age: '1 year',
    location: 'Boston, MA',
    imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400',
    category: 'cat',
    size: 'medium',
    gender: 'male',
    description: 'Large and fluffy Maine Coon with a gentle giant personality.',
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