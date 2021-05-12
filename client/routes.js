import { render, unstable_createRoot as createRoot  } from 'react-dom'

import Layout from './components/layout'
import Home from './pages/home'
import Page1 from './pages/page1'
import Page2 from './pages/page2'

const ReactRoot = document.getElementById('react-root')

const app = createRoot(ReactRoot)

FlowRouter.route('/', {
  action () {
    // app.render(<Layout><Home /></Layout>)
    render(<Layout><Home /></Layout>, ReactRoot)
  }
})

FlowRouter.route('/page1', {
  action () {
    // app.render(<Layout><Page1 /></Layout>)
    render(<Layout><Page1 /></Layout>, ReactRoot)
  }
})

FlowRouter.route('/page2', {
  action () {
    // app.render(<Layout><Page2 /></Layout>)
    render(<Layout><Page2 /></Layout>, ReactRoot)
  }
})
