export default function SignUp() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-sm space-y-8">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
