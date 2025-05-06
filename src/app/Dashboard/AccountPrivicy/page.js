
export default function PersonalDataPage() {
    return (
        <div className="min-h-screen flex items-start justify-start px-2 sm:px-6 lg:px-4 py-12">

            <div className="max-w-md w-full">
                <h1 className="text-2xl font-semibold  text-neutral-600 mb-2">Personal Data</h1>

                <h2 className="text-sm font-semibold  text-neutral-600 mb-1">
                    See and manage all the personal data in your account
                </h2>



                <p className="text-sm text-neutral-500 mb-6">
                    Your data includes things like your contact details, payment <br/> details and the information we know
                    about how you use <br/> SealVPN.
                </p>

                <hr className="mb-6 border-gray-200" />

                <h2 className="text-sm font-semibold  text-neutral-600 mb-3">
                    Choose how you'd like to manage your data:
                </h2>

                <form className="space-y-3">
                    <label className="flex items-center space-x-2 text-neutral-500">
                        <input type="radio" name="dataOption" className="form-radio text-indigo-600" />
                        <span>Download a copy of your data</span>
                    </label>
                    <label className="flex items-center space-x-2 text-neutral-500">
                        <input type="radio" name="dataOption" className="form-radio text-indigo-600" />
                        <span>Update or correct your data</span>
                    </label>
                    <label className="flex items-center space-x-2 text-neutral-500">
                        <input type="radio" name="dataOption" className="form-radio text-indigo-600" />
                        <span>Delete your account and personal data</span>
                    </label>

                    <button
                        type="submit"
                        disabled
                        className="mt-6  bg-gray-200 text-neutral-500 font-semibold py-3 px-7 rounded-full cursor-not-allowed"
                    >
                        Continue
                    </button>
                </form>
            </div>
        </div>
    );
}
