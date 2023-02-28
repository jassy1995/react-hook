import useTranslation from "../hooks/useTranslation"
import Button from "./Button"

export default function Translation() {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation()

  return (
    <>
      <div className='flex flex-col space-y-4 border-t border-t-green-500'>
        <h1 className="text-slate-600 text-lg underline underline-offset-8 italic mb-3">translate example</h1>
        <div className="text-black">{language}</div>
        <div className="text-black">{t("hi")}</div>
        <div className="text-black">{t("bye")}</div>
        <div className="text-black">{t("nested.value")}</div>
        <Button handler={() => setLanguage("sp")}>Change To Spanish</Button>
        <Button handler={() => setLanguage("en")}>Change To English</Button>
        <Button handler={() => setFallbackLanguage("sp")}>Change FB Lang</Button>
      </div>
    </>
  )
}




