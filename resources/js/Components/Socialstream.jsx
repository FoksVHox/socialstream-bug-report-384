import InputError from '@/Components/InputError.jsx';
import ProviderIcon from '@/Components/SocialstreamIcons/ProviderIcon.jsx';

export default function Socialstream({ prompt, providers, error }) {
    return (
        <div className="space-y-6 mt-6 mb-2">
            <div className="relative flex items-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink text-gray-400 mx-6">{prompt}</span>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>

            {error && <InputError message={error} className="text-center" />}

            <div className="grid gap-4">
                {providers.map((provider) => {
                    return (
                        <a
                            key={provider.id}
                            href={route('oauth.redirect', provider.id)}
                            className="inline-flex justify-center items-center gap-2 py-3 bg-white border border-gray-300 rounded-md font-semibold text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
                        >
                            <ProviderIcon provider={provider} className="h-6 w-6" />

                            <span class="block font-medium text-sm text-gray-700">
                                {provider.buttonLabel || provider.name}
                            </span>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
