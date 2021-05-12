import { render } from 'react-dom'

import Layout from './components/layout'
import Home from './pages/home'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'

const ReactRoot = document.getElementById('react-root')

FlowRouter.route('/', {
  action () {
    render(<Layout><Home /></Layout>, ReactRoot)
  }
})

FlowRouter.route('/page1', {
  action () {
    render(<Layout><Page1 /></Layout>, ReactRoot)
  }
})

FlowRouter.route('/page2', {
  action () {
    render(<Layout><Page2 /></Layout>, ReactRoot)
  }
})

FlowRouter.route('/page3/:some1/:some2', {
  action () {
    render(<Layout><Page3 /></Layout>, ReactRoot)
  }
})
