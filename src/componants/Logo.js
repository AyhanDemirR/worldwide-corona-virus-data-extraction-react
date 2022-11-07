import PropTypes from 'prop-types'

const Logo = ({logo,title}) =>{
    return(
        <div className='flex items-center'>
            <img src= {logo} alt= {title} className='mr-3 h-6'/>
            <span className='self-center text-xl font-semibold whitespace-nowrap text-white'>
                {title}
            </span>
        </div>
    )

}
Logo.prototype={
    title:PropTypes.string,
    logo:PropTypes.string
}
Logo.defaultProps={
    title:'Corona App',
    logo:'https://media.istockphoto.com/vectors/stop-virus-corona-virus-monster-vector-logo-character-design-corona-vector-id1251479382'
}

export default Logo