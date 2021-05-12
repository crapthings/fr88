export default function () {
  useLayoutEffect(function () {
    console.log('page1 mount')
    const trackerHandler = Tracker.nonreactive(function () {
      return Tracker.autorun(function () {
        console.log('page1 inside tracker', FlowRouter._current, FlowRouter.getQueryParam('something'))
      })
    })

    return function () {
      console.log('page1 unmount')
      trackerHandler?.stop()
    }
  }, [])

  return (
    <div>page1</div>
  )
}
