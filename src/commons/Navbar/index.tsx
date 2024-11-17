"use client";

import { Bell, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-end items-center w-full mb-7 border-b border-gray-200 p-2 ">
      {/* LEFT SIDE */}

      {/* RIGHT SIDE */}
      <div className="flex justify-between items-center gap-5 mr-5">
        {/* Notification Bell Icon */}
        <div className="relative">
          <Bell className="cursor-pointer text-gray-500" size={24} />
          <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
            3
          </span>
        </div>

        <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />

        {/* Profile Image and Link */}
        <div className="flex items-center gap-5 cursor-pointer px-3 py-2">
          <Image
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAK4AtwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAQIDBQYABwj/xABCEAABAwIDBAYGCQIEBwAAAAACAAEDBBIFESITITEyBhRBQmFxI1FScpGhJGKBgpKxwdHwFTMHY+HxFkNTosLS4v/EABkBAAMBAQEAAAAAAAAAAAAAAAEDBAIABf/EACQRAAIDAAMAAgICAwAAAAAAAAABAgMREiExBBNBUSJhMlJx/9oADAMBAAIRAxEAPwDynNdcmO6TNSYWaTMSmF0KykEkGgphDkmXKEpFHehxDyC7lzkhwdSMy7A6LclY01xSZLgEzSKRpkMzJ2SGB0I216kBCA2tGwiuOIpmQrsjZ2Qjp8RbG5JWZKlZloBzMi4WQzMi4WWWaRMzJsjKVmTDZA0DEuSmy5cAqck+OK9PEUZTxpTlgVHSMKVPekVnAwqfZCaQ7GPVaZQSUyh2Cv5YEKcKKtMuorY4kSEKlCNFxxIuZygVxxKNgVnLEgZJoIjtIhu+KMW34CSS9GWLtmmtWCZ2xRESQqqX/pD90s0z65C+cSQQRcQoEaou9F+FG09REem60vZJc4SXoVKL8EqGQBKyqWVafOmRfRiSFZlIAJgkpgkRcjkhWhREQqF5xU0J3rPLTWBDMo5VMyZIKIQQlykIVyIAKEFPyLoBRlJRS11ZFS0w3SzGwAI9rup97N50Dxz+yj4Sl9kl6tgn+FdDT0wliFTJJP27LJhb48U7E+hUWH6ovSRF3rd7ea3KnrwxC5bmnlht7QoWVeg1XR0TDlWUxnBpaS4h1Cp3W0UqaZSRsiJJ46WEppitEf5kyijazUWkR3qjq55cQqdPKPIPh63W66+b/oxZZxX9jqvEZ6vl9HF7I9vm6ihgvVlQYNLLbp/Er6lwXZWlsrvu9ipdkK1iEwossesp5YhpKO2KLUW8y7fLyVU561uZ8Klqw1RWjb9rZ9iqKvo6QcqzC+P5GW/Fn+DPsSbI94cv5I2ow2WLmEh97ggSGzSQ6VQmmRyi16KFXLFpIrh+eXgleQT1CoC0cpCoXKzV/OCDijlJoLYk7MkkesLlKwrODNIslY0YoNmVhSoNGohrMmmnZpprIwHNclNcuAQQLZ/4YPF/xnTbf2JLPey/bNY2FE09TLSVkVRARRyxmzgQ8WdkiLyWmmtjh9QRqDFSHqZXd7gsJgn+IpVFMI1NGJT26jE8mfxyy3I6fGpa3VJp9kR4Mr29RCo4w6aAbFn8XoROErh7quY6rQgMUmHqxe66W46NUmjxjpP6KbqcHNIWq31J+DYOR23d7m9fxSRt/UMeqZi1arB8myZbTDKEYrbhU1tnBYi749X2PlIlw7CxiAdKs2ohs5UVSxKzjpLwUGOTPS5KJQFT2KA6S/8A9VqHoEJUU1i1wkgfZFmLraET0ksrjGFbIyIR0r0mppe8qCsp+a4bv2T67XERbTGaPNpobPdQsjLS4vRbIyt5S/n7LOStYZCXl81fCXJHkW18HhLQl/y/wo3JVkGiYfZVqy6QIeDLUZTuhXdSxEstjIosGJc7qFiXOawMHEuTGJciAZCllXRJxjepvyM/BcYTLZathQ1OhYajksWgoqvQrozTRHKD01cdXoVdjleQUcuy5lDHNeCExC0wK7Vp5UdOwy/RGnvDrBd4y/N2db6mi0Csl0cHZU0QxDdrJhH16nyWuhnrotUtGMg/5RZ5LzbtlM9j4+RrRbUcN6uoY7AVPheJUsx6dJeyXFXgyjYhXHPQWyb8HOOhVdUH1UdPidNSB6f/AFVQeNdbO2kpfvGX6JskmvRcG4vtEFSCocQiFXlYFdZddCX1R/dUtQ+1022kPMJdinfTKo9ozWK0t8Jabv1ZYfE4rJtX3fJel14fRi91efY+3prrlX8eRD8yKzSqFis93lVmJaEFBTTnCUwxSFEOV0gi+Tdm90YAaFRJkcEzndPidROngltjUgxiSESiYkhEs6aJmJcoRJctAComUqiiTydTMYhQlsRlPXKnlJQNPYtwbMSw2UGIfWSVFcJgsd/UiBK2JEapTEtm6wtur0cU3KJDpLzfNGR9JqENJSjp5r5Gbty4diJoaPrGAwQkN3ohu+DKL+nVIYCWFxwRjbMM8RiLM7Ez55E3ebe/qyUKUJSbkz1NnGCUUFBWUdQe0g/uiWq0mJs28W7d3atJhNR1iH7qz+FYBLFDUzVgjJXTy7R6m212dmZmbJmydt2/996uMA+j00/2sKzZBRms8NQm5w7XZBiBxGZbXlHm9WSqpMepaQ7Slhhu5RMmufjlu7OCs6uiKrhlt7xC5eTPvZvHLNV1ZGNRRwUtJAOHS0820GcSe93dnZ3dnbe+T8c0aYxfcgXSkv8AEdH0koas9nFKN3dIDYm+W9lPaNRqEdXtKsw3owIAMZS9YEZimuIWzc34u7s3hwbctHFSdUhtFYshFPUarnLMkZvF4vQy+6sQeHDiFZbLLbEO8rePHezfNeg4u14EKocNwwpdkUHNIfNu3b93FNqlxjou2HOSTDavBraAoRHYxjTHlEHDJm3Z+t8nXn1q9T6XtPh+CFMWkpM4NW52Ym3/ACZ15kQoVzaXYr5HFtYBk2tPFk4xSMydy0nw5013Tk0loJzOuTVyJksoksiSNdK6QNAp3QEhqerNVpSJ9cSecjjJPiUNykiJPa6Er098wIfo0XusyupKKI9WoSVD0eqh2Iq+lq/Q6V5UX6e7JPrAWrqQpISjjuuLcnUkeyofmq4IylrBknK67O0exmWlemEKO64VyTk2dJqCS/ZW0U4id34kaVPEeq1VRU8t5SQFb+SNw+vIwHaD/u3FGt56CyO9oNGPR7KrK6XmVxNVCMKzeIzijc14gUJvtoosUl5lLQAQQiMXNcLfYz5u/wAmQNZJtdX1lLhGOYZfFHPWR09ssgTEZM2lmd82d/LLt4o8G4pIDnGDbZTdOMZKoMaG64YzcyIuLvwbP5rHnMpsSqRqK+pmEtoJSk4lvbMc9z5PvbdlxQZimxjnRDZPlLTimSNMhZWIFA8hAnKH6EuWFk8yiOoQJTIeSUkxVmXZhZPUrlU3klW/qF/cbEHTJi0JrmmO96iws0rawSNV7QktBsb04KQU1XcULdWsohpSUoUpK/GlFP6sKy7wqg0vR+sl6nTEJcwN8W3P82dXsUk5ndUkQ6cxAdzeGfrdZbo9Lsj2Zd0sx8n4/P8ANbDFYSloxkpitKPvW57uOWX2qWa2X/T1ap/wQN1mpvHYFcPdEvHxV3G+JygI+jG7lIif9lTYNhWOVsMs1JsZNmdlhZMT8HZ2zbJ2yf1rQUbYvCA9Zwsik4Nuf9HyWo1S/IZzi/GtX4K0nxPVHLPGI/Vj3/miIyGKmGG4tPe7VLJRY9UmRRYfaN2Wu1uPg+/tZV2IUOOUgDtypYyJ8hC1idsss88tzcd29B1TNfZW+tW/olmrp4g70kXC7tbzy4oGZyqD5iVvSU2yprZyuLiRdmfggSEdSW12cmsKfEH2QEXsi7/JecVjLfY1L6Gf3X/JYatZW1dI8z5L2RXbSxSBMopRQ7vYnuKZLyaD3tNQSU6jjmRkR3rGOJpNSK44CURU5K7eMU3YLSsYHVpS9WJcrxqb6q5H7WD6US3JBdMF08RUzHBUZipWlFCMnJbQxSDNsK7bIRKhgeTDYKrZTDJ+Ly7VvsLqxloLea4cvtbgvM1oujNfZ9FlL3fL+fouzobVPHjNp0bxOWhqSh2hR3cvizftmtzS4xJIH9yPzL/TivOXpNrqFTwU+J/2xlK33vydaruceim2iu1bJd/s1WMdICgAm6xcRcot2v6my3qipDnq6nbVZdudv6v606DCZQPaFzfztU4w7L/y8lmc5SfYYwrhHIIZic9gKgqauyFTYxV82rm+TMqPMqs/8gf+9/U3gglr1g3rEQ15EdHKX1dPxZZStZbWrh+jFH3iF/jluWLrFRB6QXxxldIKEMUeYoWQU9MmaB8kTTOonFTU7LpeGY+h48iniBQDyIqLkSl6UPwc4rlDO6VVKtYTOb0HAVOwpoipGXntlSR2SVhTmZPFljTWDGBOYFKwpzMhocIbE6O6IxkHSQ7xUzMltQ0OG26M4rFVgIlplHcQrWwTCGpeSUD2VI26bs20rSUWI4nZ6Io5B+tudDztFkJ8o4z0Iq2KxZbpFjUVOGzEtRKrlqcYqPR+hjH2r3f9ElFgw7bbVJdYl9ouDeTIue+hUM8AqOlnxA9pPcMXzPy8PFXQ0oxBdaI28o9jN4Kxp6Yf/n906phvBZlLTUUkZqobXd+FZHGKfq9ZKPd4j5P/AD5LfT02tVGN4T16HTplHkL9HW67Ungu+nktRh5BQcwqwq4paQ9nPEQl8n8WftQZteqVI82SBHFPhZSvEmg1i3pnOwkeRGQciDFFwciC9Nvw6Vcoak+VcqoxeE7ktEYk5jULJy87CnSZjT2kQ+a5nQwOhbSJzSoNiTmJdx0PLAxpUrzCCBI8uCYZd5Oj8b/YVK/PA4MQGKpg+tKLfF2ZbLD4i7q87w2J63E4AJ8hzu+Dr0OiOy3Ns7kr5MYwxRLPguUtbLmnpi7yPCKxC0crepHA214qJMvZLGyWQNCKjjYQTTZN49CuXZVvFYqvGK2jwyHaVJai5QHeR+TfqndLcdfBQGKniuqJWzYi5QbPLPxf+eC85qJZauUp6mQ5JC3uRPm6dT8Vy/k/Ca/5ih/FehWLYxLiGnZRxwcRG3N/td/0VcziekhES+CQ3UTsvRVcUsSPLlZKT1skKOxDmCKgkctJ70koZamSZVuPg2NifoOKNpmvBBui6UtCyvRj8HVEArk6c0qqUnhM0tP/2Q=="
            alt="Profile Picture"
            width={40}
            height={40}
            className="rounded-full"
          />
          <Link href="/settings">
            <Settings className="text-gray-500" size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
