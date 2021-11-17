import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./DropDownButtonPageAbout.css"

function DropDownButtonPageAbout({ ville, mail, telephone }) {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <>
            <main class="max-w-md mx-auto">
                <section class="shadow row">
                    <div class="tabs">
                        <div class="border-b tab">
                            <div class="border-l-2 border-transparent relative">
                                <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1" />
                                <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck1">
                                    <span class={`${darkMode?"text-white":"text-grey-darkest"} font-thin text-xl`}>
                                        Ville
                                    </span>
                                    <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                        <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <polyline points="6 9 12 15 18 9">
                                            </polyline>
                                        </svg>
                                    </div>
                                </header>
                                <div class="tab-content">
                                    <div class={`pl-8 pr-8 pb-5 ${darkMode?"text-white":"text-grey-darkest"}`}>
                                        <ul class="pl-4">
                                            <li class="pb-2">
                                                {ville}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border-b tab">
                            <div class="border-l-2 border-transparent relative">
                                <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck2" />
                                <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck2">
                                    <span class={`${darkMode?"text-white":"text-grey-darkest"} font-thin text-xl`}>
                                        Mail
                                    </span>
                                    <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                        <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <polyline points="6 9 12 15 18 9">
                                            </polyline>
                                        </svg>
                                    </div>
                                </header>
                                <div class="tab-content">
                                    <div class={`pl-8 pr-8 pb-5 ${darkMode?"text-white":"text-grey-darkest"}`}>
                                        <ul class="pl-4">
                                            <li class="pb-2">
                                                {mail}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border-b tab">
                            <div class="border-l-2 border-transparent relative">
                                <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck3" />
                                <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck3">
                                    <span class={`${darkMode?"text-white":"text-grey-darkest"} font-thin text-xl`}>
                                        Tel
                                    </span>
                                    <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                        <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <polyline points="6 9 12 15 18 9">
                                            </polyline>
                                        </svg>
                                    </div>
                                </header>
                                <div class="tab-content">
                                    <div class={`pl-8 pr-8 pb-5 ${darkMode?"text-white":"text-grey-darkest"}`}>
                                        <ul class="pl-4">
                                            <li class="pb-2">
                                                {telephone}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}



export default DropDownButtonPageAbout;