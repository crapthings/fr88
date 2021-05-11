export default function Layout ({ children }) {
  return (
    <div id='layout'>
      <Nav />
      {children}
    </div>
  )
}

function Nav () {
  return (
    <>
      <ul>
        <li><a href='/'>home</a></li>
        <li><a href='/page1'>page1</a></li>
        <li><a href='/page2'>page2</a></li>
      </ul>

      <ul>
        <li><a href='/?something=test123'>home with /?something=test123</a></li>
        <li><a href='/?something=test123&wow=ads'>home with /?something=test123&wow=ads</a></li>
        <li><a href='/page1?something=test123'>home with /?something=test123</a></li>
        <li><a href='/page2?something=test123'>home with /?something=test123</a></li>
      </ul>
    </>
  )
}
