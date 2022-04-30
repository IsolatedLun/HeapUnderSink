import { useAuth } from '../../hooks/useAuth'
import DropDownContainer from '../Modules/Dropdowns/DropDownContainer'
import DropDownItem from '../Modules/Dropdowns/DropDownItem'
import Notification from './Notification'
import { INF_UserNotificatons } from './types'

const UserNotifications = (props: INF_UserNotificatons) => {
  const [user] = useAuth();
  const notificationAmt = props.notifications && props.notifications.filter(x => !x.read).length;

  return (
    <div onClick={() => props.setHasRead((prevState: boolean) => !prevState)} 
      className='[ notifications ] [ pos-relative ]' 
      data-notifications={notificationAmt}>
        <DropDownContainer item={<p className='[ fa ]'>{ `\uf0f3` }</p>} alignment='navbar'>
            {
              props.notifications && props.notifications.map((notification, idx) => (
                <DropDownItem key={idx} to={`/questions/${notification.to}/#user-answer-${notification.sender.id}`}>
                  <Notification { ...notification } />
                </DropDownItem>
              ))
            }
        </DropDownContainer>
    </div>
  )
}

export default UserNotifications;