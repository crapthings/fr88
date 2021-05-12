export default function () {
  const [route, setRoute] = useState({})

  useLayoutEffect(function () {
    homeDeepCount = 0
    console.log('home mount')
    const trackerHandler = Tracker.nonreactive(function () {
      return Tracker.autorun(function () {
        FlowRouter.watchPathChange()
        console.log('home inside tracker', FlowRouter._current, FlowRouter.getQueryParam('something'))
      })
    })
    return function () {
      console.log('home unmount')
      trackerHandler?.stop()
    }
  }, [])

  return (
    <div>
      home {route?.path}
      <HomeDeep />
    </div>
  )
}

let homeDeepCount = 0

function HomeDeep () {
  const [route, setRoute] = useState({})

  useLayoutEffect(function () {
    console.log('home deep mount')
    homeDeepCount++
    const trackerHandler = Tracker.nonreactive(function () {
      return Tracker.autorun(function () {
        FlowRouter.watchPathChange()
        console.log('home inside tracker', FlowRouter._current, FlowRouter.getQueryParam('something'))
      })
    })
    return function () {
      console.log('home deep unmount')
      trackerHandler?.stop()
    }
  })

  return (
    <div>home deep <HomeDeep1/></div>
  )
}

function HomeDeep1 () {
  const [route, setRoute] = useState({})

  useLayoutEffect(function () {
    console.log('home deep mount')
    homeDeepCount++
    const trackerHandler = Tracker.nonreactive(function () {
      return Tracker.autorun(function () {
        FlowRouter.watchPathChange()
        console.log('home inside tracker', FlowRouter._current, FlowRouter.getQueryParam('something'))
      })
    })
    return function () {
      console.log('home deep unmount')
      trackerHandler?.stop()
    }
  })

  return (
    <div>home deep <HomeDeep2 /></div>
  )
}

function HomeDeep2 () {
  const [data, setData] = useState([])

  useLayoutEffect(function () {
    const trackerHandler = Tracker.nonreactive(function () {
      return Tracker.autorun(function () {
        if (!Meteor.subscribe('test').ready()) return
        Tracker.afterFlush(()=>{
          setData(Test.find().fetch())
        })
      })
    })
    return function () {
      console.time()
      trackerHandler?.stop()
      console.timeEnd()
    }
  }, [])

  return (
    <div>home deep
      <div>{data?.map(item => <div key={item._id}>{item.title}</div>)}</div>
    </div>
  )
}
