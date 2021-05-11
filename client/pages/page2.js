export default function () {
  useEffect(function () {
    console.log('page2 mount')
    const trackerHandler = Tracker.autorun(function () {
      console.log(FlowRouter.current(), FlowRouter.getQueryParam('something'))
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
