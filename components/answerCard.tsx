import { CardContent } from "@/types"

export const AnswerCard = (params: CardContent) => {
    return (
        <div className="w-full section faq_section" id="section_194_public">
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-gray-200 py-6 px-8 rounded-xl w-full md:w-3/4 mx-auto">
                    <div className="text-lg font-bold font-overlock mb-1 overflow-hidden">
                        {params.title}
                    </div>
                    <div className="max-w-4xl text-gray-700">
                        <div className="trix-content">
                            {params.content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}