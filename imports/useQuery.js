export default function useQuery (keys) {
  const [queryParam, setQueryParam] = useState(getQueryParams(keys))

  useLayoutEffect(function () {
    const trackerHandler = Tracker.nonreactive(function () {
      return Tracker.autorun(function () {
        const _queryParam = getQueryParams(keys)
        console.log('inside tracker', _queryParam)
        Tracker.afterFlush(function () {
          // if (_.isEqual(queryParam, _queryParam)) return
          setQueryParam(_queryParam)
        })
      })
    })

    return function () {
      trackerHandler?.stop()
    }
  }, typeof keys === 'string' ? [keys] : keys)

  return queryParam
}

function getQueryParams (keys) {
  if (typeof keys === undefined) {
    return undefined
  } else if (typeof keys == 'string') {
    return FlowRouter.getQueryParam(keys)
  } else {
    return keys?.map((key) => FlowRouter.getQueryParam(key))
  }
}
