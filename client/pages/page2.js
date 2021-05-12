export default function () {
  useLayoutEffect(function () {
    console.log('page2 mount')
    const trackerHandler = Tracker.nonreactive(function () {
      return Tracker.autorun(function () {
        console.log('page2 inside tracker', FlowRouter._current, FlowRouter.getQueryParam('something'))
      })
    })

    return function () {
      console.log('page2 unmount')
      trackerHandler?.stop()
    }
  }, [])

  return (
    <div>page2</div>
  )
}
