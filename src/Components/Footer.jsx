import React from "react";
function IndexPage() {
    return (
        <>
            <div className="pb-12">
                <div className="mx-auto container pt-20 flex flex-col items-center justify-center">
                    <div>
                        <img src="https://i.goopics.net/ngbszq.png" width="200" alt="" />
                    </div>
                    <div className="text-black flex flex-col items-center pt-3">
                        <h1 className="text-2xl font-black">Search your books</h1>
                        <div className="my-1 text-base text-color f-f-l">
                            <ul className="flex items-center space-x-4">
                                <li className="pt-4 py-0">Harder</li>
                                <li className="pt-4 py-0">Better</li>
                                <li className="pt-4 py-0">Faster</li>
                                <li className="pt-4 py-0">Stronger</li>
                            </ul>
                        </div>
                        <div className="text-sm text-color mb-5 f-f-l">
                            <p> © 2021  ISSOU-RI CORP. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndexPage;
