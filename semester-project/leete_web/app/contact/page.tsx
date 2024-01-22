export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-6">Contact Page</h1>
      <ul className="text-lg list-none text-center">
        <li className="mb-3">
          <span className="font-bold">E-mail:</span> petar.leete@gmail.com
        </li>
        <li className="mb-3">
          <span className="font-bold">Instagram:</span> <a href="https://www.instagram.com/djleete" 
          target="_blank" rel="noopener noreferrer">LEETEs Instagram Profile</a>
        </li>
        <li className="mb-3">
          <span className="font-bold">SoundCloud:</span> <a href="https://soundcloud.com/petar-ulav" 
          target="_blank" rel="noopener noreferrer">LEETEs SoundCloud Profile</a>
        </li>
        <li className="mb-3">
          <span className="font-bold">Facebook:</span> <a href="https://www.facebook.com/petar.culav.7" 
          target="_blank" rel="noopener noreferrer">LEETEs Facebook Profile</a>
        </li>
        <li className="mb-3">
          <span className="font-bold">LinkedIn:</span> <a href="https://www.linkedin.com/in/petar-ćulav-a986491b7/" 
          target="_blank" rel="noopener noreferrer">LEETEs LinkedIn Profile</a>
        </li>
      </ul>
    </main>
  );
}
