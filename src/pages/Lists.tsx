import ListCard from "../components/Card/ListCard";

const Lists = () => {
	const storedData = localStorage.getItem("itemsInCompare");
	const store = storedData ? JSON.parse(storedData) : null;
	if(!store ) {
		return (
            <div className="w-full h-screen flex flex-col items-center justify-center ">
                <h1 className="text-3xl font-bold text-gray-900">
                    Please add user info
                </h1>
            </div>
        );
	}
	
	return (
		<div className="m-4">
			<ListCard storage={store}/>
		</div>
	);
};

export default Lists;
