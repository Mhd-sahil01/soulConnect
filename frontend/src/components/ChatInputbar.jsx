export default function ChatInputbar() {
    return (
        <>
            {/* chat input */}
            <div className="absolute bottom-0 left-0 w-full bg-[#0C0F13] border-t border-[#1B444B] rounded-b-xl px-4 py-3">
                <form className="flex items-center gap-3">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 px-4 py-3 bg-[#0F141A] text-white rounded-xl outline-none border border-[#1B444B] focus:border-[#00A3FF]"
                    />
                    <button
                        type="submit"
                        className="px-6 py-3 bg-[#027FAE] hover:bg-[#0393C9] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                    >
                        Send
                    </button>
                </form>
            </div>
        </>
    )
}
