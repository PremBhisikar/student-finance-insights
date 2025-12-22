export default function Footer() {
  return (
    <footer className="w-full border-t mt-10 py-4 text-center text-sm text-gray-500">
      <p>
        Developed by <strong>Prem Bhisikar</strong> ·{" "}
        <a
          href="https://github.com/PremBhisikar/student-finance-insights"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-700"
        >
          GitHub
        </a>{" "}
        ·{" "}
        <a
          href="https://www.linkedin.com/in/prem-bhisikar/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-700"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
}
