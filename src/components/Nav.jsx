function Nav({ data }) {
  console.log("Nav render");
  const lists = data.map(d => (
    <li key={d.id}>
      <a href="">{d.title}</a>
    </li>
  ));
  return (
    <nav>
      <ul>{lists}</ul>
    </nav>
  );
}
export default Nav;
