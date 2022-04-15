import { Link } from 'react-router-dom';
import Card from './Cards/Card';

const Miscellaneuos = () => {
  return (
    <section data-desktop 
        className='[ miscellaneous ] [ flex flex-align-center padding-block-1 flex-items height-max flex-col ]'>
        <Card variant='yellow'>
            <p className='[ width-25ch text-center ]'>
                HeapUndersink is a place where you can ask any question and get any answer.
            </p> 
            <Link to="/ask" data-default='dark' data-link-variant='dotted'>Ask question</Link>
        </Card>

        <Card title='Meow'>
          <p>bruh</p>
        </Card>
    </section>
  )
}

export default Miscellaneuos