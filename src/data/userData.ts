// src/data/userData.ts
export const getUserData = async (id: string) => {
    // Mocked user data (replace with actual database query)
    const users = [
      { id: '1', name: 'John Doe' },
      { id: '2', name: 'Jane Doe' }
    ];
    
    return users.find(user => user.id === id);
  };