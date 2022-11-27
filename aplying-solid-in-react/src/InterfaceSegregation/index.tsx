// La segregación de interfaces es cuando un componente recibe demasiadas cosas que no necesita.En react es muy típico además,ya que se suele pasar todo el objeto como props.
const PostList = (items:any) => {
  return(
    <>
     {items.map( (item:any) =>
    //  debo evitar pasar todo el objeto cuando no sea necesario
      <Thumbnail key={item.id} video={item} />)} 
   </>
  )
}

// Podemos ver que realmente solo necesitaba el video.coverUrl,no todo el objeto
const Thumbnail = (video:any) => {
  return <img src={video.coverUrl} />
}

// Fijate que esto podría dar problemas a futuro,si el objeto video cambiará me podría romper tests,cuando este tipo de bugs era evitable usando interface segregation(reduciendo los contratos al minimo)

// En React esto se ve mucho en los tipicos:
{/* <div>
  <PostTitle {...post} /> <- solo necesitaba el title
  <span> author: {post.author.name}</span>
  <PostDate {...post} /> <- y este solo necesita el createdAt
</div> */}

// Obviamente hay que llegar a un acuerdo lógico,pues si necesito 6 de 8 props de un objeto es mejor pasar el objeto y no complicarse