interface INF_Welcome {
    title: string;
    children?: any;
}

const Welcome = (props: INF_Welcome) => {
  return (
    <div className="[ welcome ] [ flex-center flex-col text-center margin-block-auto ]" data-desktop>
        <h1 className='header-700'>{ props.title }</h1>
        { props.children }
    </div>
  )
}

export default Welcome;