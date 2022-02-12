import GenderSelectionForm from "../components/GenderSelectionForm"
import UserResults from "../components/users/UserResults"

function Home() {

  return (
    <>
      <div className="text-center hero-content">
       
        <GenderSelectionForm />
        <UserResults />
      </div>
      
    </>
  )
}

export default Home