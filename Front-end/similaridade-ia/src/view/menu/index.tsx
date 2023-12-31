import { Link } from "react-router-dom";

export function Menu() {
    return (
        <div className="w-full flex flex-col h-screen p-4 justify-center items-center">
            <div>
                <button type="submit" className="m-3 w-60 bg-gray-300 duration-500">
                    <a href="https://docs.google.com/spreadsheets/d/1DqhiGhhN9d7wRuLi815kNrmrxd5DvYa_/edit?usp=sharing&ouid=106046592166748212158&rtpof=true&sd=true">Ver tabelas</a>
                </button>
                <button type="submit" className="m-3 w-60 bg-gray-300 duration-500">
                    <Link to={"/casos"}>Cadastrar caso</Link>
                </button>
            </div>
        </div>
    )
}