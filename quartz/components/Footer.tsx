import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
                <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{`${text} :${link}`}</a>
            </li>
          ))}
        </ul>`r`n        <p>{`Created with Quartz v${version} © ${year}`}</p>`r`n      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
