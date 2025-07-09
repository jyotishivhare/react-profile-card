function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-24 h-24 mx-auto rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold text-gray-800">Jyoti Shivhare</h2>
        <p className="text-gray-600 mt-2">Web Developer | Learner | Explorer</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Follow
        </button>
      </div>
    </div>
  );
}

export default App;
