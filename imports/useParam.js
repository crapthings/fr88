export default function useParam (key) {
  const [param, setParam] = useState(getParam(key))

  useLayoutEffect(function () {
    const trackerHandler = Tracker.nonreactive(function () {
      return Tracker.autorun(function (computation) {
        const _param = getParam(key)
        if (computation.firstRun && _.isEqual(param, _param)) return
        Tracker.afterFlush(function () {
          setParam(_param)
        })
      })
    })

    return function () {
      trackerHandler?.stop()
    }
  }, (typeof key === 'string') ? [key] : key)

  return param
}

function getParam (key) {
  if (typeof key === undefined) {
    return undefined
  } else if (typeof key == 'string') {
    return FlowRouter.getParam(key)
  } else {
    return key?.map((k) => FlowRouter.getParam(k))
  }
}
