function Contact() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <p>If you want to get in touch, feel free to reach out via email or connect with me on social media!</p>
      <ul className="mt-4 space-y-2">
        <li>Email: <a href="mailto:mahek@example.com">mahek@example.com</a></li>
        <li>Twitter: <a href="https://twitter.com/mahek" target="_blank" rel="noopener noreferrer">twitter.com/mahek</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/mahek" target="_blank" rel="noopener noreferrer">linkedin.com/in/mahek</a></li>
      </ul>
    </div>
  );
}

export default Contact;