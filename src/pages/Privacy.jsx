import { ShieldCheck } from "lucide-react";

export default function Privacy() {

    return (
        <section>
            <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <h1 className="text-3xl font-semibold tracking-tight">Privacy</h1>
            </div>

            <div className="mt-4 text-neutral-700 max-w-prose">

                <b>Safe Browsing</b><br />
                It is important to remind users of any internet service when browsing the internet that there is trackable information pertaining to your use, access, and transmission over wireless service providers and wired connections.
                <p>Remember:</p>
                <ul>
                    <li>Consider the device you are using to access the bot</li>
                    <li>Use a VPN for tracking security</li>
                    <li>Ensure your privacy settings are appropriately managed</li>
                    <li>Use <a href="https://www.torproject.org/download/" target="_blank">Tor browser</a> for additional privacy</li>
                    <li>Use private browser mode to access sensitive sites and clear cache and cookies after using the website</li>
                    <li></li>
                </ul>

                <br />
                <b>Confidentiality</b><br />
                <i>TEXT SERVICE</i><br />
                Your privacy is the main priority of this service. The "Abortion Service" does not trace calls, texts, or live chat conversations. We will not be able to get a hold of you or identify you if you choose to stay anonymous.

                Our text service uses technology created to be secure and is protective. It uses end-to-end encryption and the data is only available to those you are in touch with. Once you end your conversation, we will no longer have any access to your contact information. Encryption is a way to ensure that if the data is being intercepted, it does not come up appearing the same way you see it, it comes up looking like code.
                <br />
                Anonymized records of this chat service may be retained for the purpose of training, research, and/or quality control. No identifiable information will be used for public research or publication or shared with third parties.
                <br /><br />
                When you contact us, you may use your name, an alias, or nothing at all. It's up to you! Your message remains confidential and a trained facilitator will respond.

                <br /><br />


                <i>CHAT BOT</i><br />
                Please note, the same security and privacy does not apply to the chatbot, so do not share personal or identifiable details when consulting the chatbot. We recommend being mindful of a few safety features when engaging the chatbot:
                Consider the device you are using to access the bot
                Use a VPN for tracking security
                Ensure your privacy settings are appropriately managed
                Use Tor browser for additional privacy
                <br /><br />
                <b>Policy</b><br />
                The website is hosted by Cloudflare whose privacy policy can be found <a href="https://www.cloudflare.com/en-ca/privacypolicy/#cloudflare-privacy-policy" target="_blank">here</a>.

            </div>
        </section>
    );
}