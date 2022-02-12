


function CardDisplay({ userAvatar, userFullName, userEmail }) {
    return (
    <CardDisplay>
        <div className="text-center hero-content">
            <div>
                <div>    
                    <div className="avatar m">
                        <div className="rounded-full shadow w-30 h-30">
                            <img src={ userAvatar } alt="Profile" srcset="" />
                        </div>
                    </div>
                    <p className="text-3xl mb-2">{ userFullName }</p>
                    <p className="text-xl mb-8">{ userEmail }</p>
                </div>
            </div>
        </div>   
    </CardDisplay>
  )
}

export default CardDisplay