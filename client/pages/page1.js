export default function () {
  useEffect(function () {
    console.log('page1 mount')
    const trackerHandler = Tracker.autorun(function () {
      console.log(FlowRouter.current(), FlowRouter.getQueryParam('something'))
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
