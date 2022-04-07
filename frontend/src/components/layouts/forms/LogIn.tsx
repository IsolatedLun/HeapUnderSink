import Button from "../../modules/buttons/Button"
import FormPart from "../../modules/forms/FormPart"

const LogIn = () => {
  return (
    <div className="grid-split">

      <form className="[ form ] [ flex-items flex-col margin-block-auto flex-justify-center ]">

          <FormPart>
            <label className="[ label ]" htmlFor="">Email Address</label>
            <input type="email" className="[ input ]" />
          </FormPart>

          <FormPart>
            <label className="[ label ]" htmlFor="">Password</label>
            <input type="password" className="[ input ]" />
          </FormPart>

          <Button props={{ variant: 'action', onClick: () => null }}>Log in</Button>
      </form>

    </div>
  )
}

export default LogIn