const userDetails = async ({ params }: { params : Promise< {id: string} > }) => {
    const {id} = await params;
    
    return <div>User details for user {id}</div>;
};

export default userDetails;