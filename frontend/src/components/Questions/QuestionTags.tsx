import Tag from '../Modules/Tags/Tag';
import { INF_Tag } from '../Modules/Tags/types';

const QuestionTags = ({ tags } : { tags: INF_Tag[] }) => {
    if(tags.length > 0)
        return (
            <div className="[ question__tags ] [ flex-items flex-wrap ]">
                {
                    ( tags && tags.map((tag, idx) => 
                        <Tag key={idx} name={tag.name} views={tag.views} isDead={false} /> 
                    ))
                }
            </div>
        )
    else
        return (
            <Tag key={0}  name='No tags' views={0} isDead={true} />
        )

}

export default QuestionTags;