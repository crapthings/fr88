export default function () {
  useEffect(function () {
    console.log('home mount')
    const trackerHandler = Tracker.nonreactive(function () {
      return Tracker.autorun(function () {
        console.log(FlowRouter.current(), FlowRouter.getQueryParam('something'))
      })
    })

    return function () {
      console.log('home unmount')
      trackerHandler?.stop()
    }
  }, [])
  return (
    <div>home</div>
  )
}
