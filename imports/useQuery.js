export default function useQuery (key) {
  const [queryParam, setQueryParam] = useState(getQueryParam(key))

  useLayoutEffect(function () {
    const trackerHandler = Tracker.nonreactive(function () {
      return Tracker.autorun(function (computation) {
        const _queryParam = getQueryParam(key)
        if (computation.firstRun && _.isEqual(queryParam, _queryParam)) return
        Tracker.afterFlush(function () {
          setQueryParam(_queryParam)
        })
      })
    })

    return function () {
      trackerHandler?.stop()
    }
  }, (typeof key === 'string') ? [key] : key)

  return queryParam
}

function getQueryParam (key) {
  if (typeof key === undefined) {
    return undefined
  } else if (typeof key == 'string') {
    return FlowRouter.getQueryParam(key)
  } else {
    return key?.map((k) => FlowRouter.getQueryParam(k))
  }
}
