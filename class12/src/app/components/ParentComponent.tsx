import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    let fullName = "ALi AHmed"
    let address = "Karachi ,Pakistan"
    let rollNumber = 234802394

    let fullName2 = "Haseeb"
    let address2 = "Hyd"
    let rollNumber2 = 213897

    return (
        <div>
        <ChildComponent
            name={fullName}
            address={address}
            rollNO={rollNumber}
        />

        <ChildComponent
            name={fullName2}
            address={address2}
            rollNO={rollNumber2}
        />
        </div>
    )
}

export default ParentComponent