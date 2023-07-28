import React from 'react'

const Filter = () => {
    return (
        <>
            <nav>
                <div className="d-flex justify-content-between">
                    <div className="size">
                        <div className="dropdown">
                            <button className="dropdown-item dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                Size
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button className="dropdown-item" type="button">Action</button></li>
                                <li><button className="dropdown-item" type="button">Another action</button></li>
                                <li><button className="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropdown-item dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            Sort By:
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li><button className="dropdown-item" type="button">Action</button></li>
                            <li><button className="dropdown-item" type="button">Another action</button></li>
                            <li><button className="dropdown-item" type="button">Something else here</button></li>
                        </ul>
                    </div>

                </div>
            </nav>



        </>
    )
}

export default Filter