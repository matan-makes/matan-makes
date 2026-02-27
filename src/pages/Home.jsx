import avatarSrc from "../assets/IMG_6429.jpg";

function Home() {
  return (
    <main className="flex-1 w-full max-w-[720px] mx-auto px-6 py-8">
      <section>
        <img
          src={avatarSrc}
          alt="Photo of Matan"
          className="w-24 h-24 mb-6 rounded-full object-cover block ring-4 ring-rose"
        />
        <h1 className="text-2xl font-bold mb-6">Hi!</h1>
        <p className="mb-4">
          I'm Matan, a software engineer and musician. I like to make stuff! You
          can listen to my band{" "}
          <a
            href="https://coldwrecks.bandcamp.com/"
            className="text-steel no-underline hover:text-rose hover:underline"
          >
            Cold Wrecks
          </a>
          .
        </p>
        <p className="mb-4">
          Lately I've been learning game development using the Godot engine and
          working on my pickleball skills.
        </p>
        <p className="mb-0">
          I've built a lovely life for myself in Brooklyn, NY with my partner
          and our four animals; Pudge, Mochi, Lieutenant Space Kitty, and Qwerty
          :^)
        </p>
      </section>
    </main>
  );
}

export default Home;
