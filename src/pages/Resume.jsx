function Resume() {
  return (
    <main className="flex-1 w-full max-w-[720px] mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-6">Resume</h1>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mt-8 mb-2">Education</h2>
        <ul className="mb-4 pl-8">
          <li>
            <strong>Placeholder University</strong> — Degree, Year
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mt-8 mb-2">Experience</h2>
        <ul className="mb-4 pl-8">
          <li>
            <strong>Placeholder Role</strong> at Company — Year–Year. Short description.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mt-8 mb-2">Skills</h2>
        <ul className="mb-4 pl-8">
          <li>React, JavaScript, CSS</li>
          <li>Add your skills here</li>
        </ul>
      </section>
    </main>
  )
}

export default Resume
