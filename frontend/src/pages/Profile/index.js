export default function Profile(){

return (
  <>
    <h2>Deck Details</h2>
    <Paper className="show-stats" elevation={6}>
      <Stack>
        <h3>Deck Name: {deck.name}</h3>
        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <h4>Created By:</h4>
          <Avatar
            alt={deck.owner.nickname}
            src={deck.owner.picture}
            sx={{ height: 30, width: 30 }}
          />
          <h4>{deck.owner.nickname}</h4>
        </Stack>
        <h4>Total Cards: {cardNo} </h4>
        <h4>Unique Cards: {deck.cardList.length}</h4>
      </Stack>
    </Paper>
  </>
)
}