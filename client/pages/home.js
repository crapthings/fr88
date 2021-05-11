export default React.memo(function () {
  const something = useQuery(['something', 'wow'])
  console.log('home page', something)
  return (
    <div>home</div>
  )
})
