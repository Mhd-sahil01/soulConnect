import { BookKey } from "lucide-react"

export default function Join() {
    
    return (
        <>
         <h2 className="text-2xl text-center sm:text-3xl font-bold py-4">Join Room</h2>
            <div className="w-full max-w-sm sm:max-w-md p-6 sm:p-6 bg-linear-to-br from-[#1E5A63] via-[#123A40] to-[#082024] rounded-xl shadow-md border border-[#1B444B]/70">
                <form className="space-y-4">
                    <div className="space-y-2">
                        <label
                            htmlFor="code"
                            className="block text-sm font-medium text-white">
                            <span className="flex items-center gap-2">
                                <BookKey /> Room Code
                            </span>
                        </label>
                        <input
                            type="text"
                            id="code"
                            className="login-input"
                            placeholder="Enter Room Code"
                            // onChange={}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg shadow-sm text-sm font-medium text-white
                    bg-[#0AA5BF] hover:bg-[#088EA5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0AA5BF] transition-all hover:scale-[1.02]"
                    >
                        {'Submit'}
                    </button>

                </form>
            </div>
        </>
    )
}
