let SessionLoad = 1
if &cp | set nocp | endif
let s:cpo_save=&cpo
set cpo&vim
inoremap <expr> <Up> pumvisible() ? "\" : "\<Up>"
inoremap <expr> <Down> pumvisible() ? "\" : "\<Down>"
imap <S-Tab> <Plug>SuperTabBackward
inoremap <silent> <SNR>44_AutoPairsReturn =AutoPairsReturn()
inoremap <silent> <C-Tab> =UltiSnips#ListSnippets()
inoremap <F1> :set invfullscreena
cmap <Nul> <Nop>
imap <Nul> <C-Space>
inoremap <C-Space> 
map! <D-v> *
noremap  3
snoremap <silent>  c
nnoremap <silent>  :TmuxNavigateLeft
xnoremap <silent> 	 :call UltiSnips#SaveLastVisualSelection()gvs
snoremap <silent> 	 :call UltiSnips#ExpandSnippetOrJump()
nnoremap <silent> <NL> :TmuxNavigateDown
nnoremap <silent>  :TmuxNavigateUp
nnoremap <silent>  :TmuxNavigateRight
nnoremap  @@
nnoremap  :call NumberToggle()
nnoremap <silent>  :CtrlP
snoremap  "_c
nmap  <Plug>(RepeatRedo)
map  :NERDTreeToggle
noremap  3
nnoremap <silent>  :TmuxNavigatePrevious
nnoremap ,d :YcmShowDetailedDiagnostic
nmap <silent> ,w,m <Plug>VimwikiMakeTomorrowDiaryNote
nmap <silent> ,w,y <Plug>VimwikiMakeYesterdayDiaryNote
nmap <silent> ,w,t <Plug>VimwikiTabMakeDiaryNote
nmap <silent> ,w,w <Plug>VimwikiMakeDiaryNote
nmap <silent> ,w,i <Plug>VimwikiDiaryGenerateLinks
nmap <silent> ,wi <Plug>VimwikiDiaryIndex
nmap <silent> ,ws <Plug>VimwikiUISelect
nmap <silent> ,wt <Plug>VimwikiTabIndex
nmap <silent> ,ww <Plug>VimwikiIndex
nmap ,p <Plug>(Prettier)
nnoremap ,s :ToggleWorkspace
map ,l :set list! " Toggle tabs and EOL
map ,q gqip
map ,  :let @/='' " clear search
nnoremap ,bp :bp|bd #|
nnoremap ,bn :bn|bd #|
nmap ,bd ,bn
nmap . <Plug>(RepeatDot)
vnoremap / /\v
nnoremap / /\v
xmap S <Plug>VSurround
nmap U <Plug>(RepeatUndoLine)
vmap [% [%m'gv``
vmap ]% ]%m'gv``
vmap a% [%v]%
nmap cv <Plug>SystemPaste
nmap cP <Plug>SystemCopyLine
xmap cp <Plug>SystemCopy
nmap cp <Plug>SystemCopy
nmap cS <Plug>CSurround
nmap cs <Plug>Csurround
nmap ds <Plug>Dsurround
vmap gx <Plug>NetrwBrowseXVis
nmap gx <Plug>NetrwBrowseX
xmap gS <Plug>VgSurround
onoremap <silent> io :normal vio
vmap <silent> io <Plug>InnerOffside
nnoremap j gj
nnoremap k gk
nmap u <Plug>(RepeatUndo)
nmap ySS <Plug>YSsurround
nmap ySs <Plug>YSsurround
nmap yss <Plug>Yssurround
nmap yS <Plug>YSurround
nmap ys <Plug>Ysurround
nnoremap zR zM
nnoremap zM zR
nnoremap zr zm
nnoremap zm zr
nnoremap <SNR>145_: :=v:count ? v:count : ''
vnoremap <silent> <Plug>NetrwBrowseXVis :call netrw#BrowseXVis()
nnoremap <silent> <Plug>NetrwBrowseX :call netrw#BrowseX(expand((exists("g:netrw_gx")? g:netrw_gx : '<cfile>')),netrw#CheckIfRemote())
nnoremap <silent> <Plug>GitGutterPreviewHunk :GitGutterPreviewHunk
nnoremap <silent> <Plug>GitGutterUndoHunk :GitGutterUndoHunk
nnoremap <silent> <Plug>GitGutterStageHunk :GitGutterStageHunk
nnoremap <silent> <expr> <Plug>GitGutterPrevHunk &diff ? '[c' : ":\execute v:count1 . 'GitGutterPrevHunk'\"
nnoremap <silent> <expr> <Plug>GitGutterNextHunk &diff ? ']c' : ":\execute v:count1 . 'GitGutterNextHunk'\"
xnoremap <silent> <Plug>GitGutterTextObjectOuterVisual :call gitgutter#hunk#text_object(0)
xnoremap <silent> <Plug>GitGutterTextObjectInnerVisual :call gitgutter#hunk#text_object(1)
onoremap <silent> <Plug>GitGutterTextObjectOuterPending :call gitgutter#hunk#text_object(0)
onoremap <silent> <Plug>GitGutterTextObjectInnerPending :call gitgutter#hunk#text_object(1)
nnoremap <silent> <Plug>(PrettierCliPath) :PrettierCliPath
nnoremap <silent> <Plug>(PrettierCliVersion) :PrettierCliVersion
nnoremap <silent> <Plug>(PrettierCli) :PrettierCli
nnoremap <silent> <Plug>(PrettierVersion) :PrettierVersion
nnoremap <silent> <Plug>(PrettierAsync) :PrettierAsync
nnoremap <silent> <Plug>(Prettier) :Prettier
snoremap <silent> <Del> c
snoremap <silent> <BS> c
snoremap <silent> <C-Tab> :call UltiSnips#ListSnippets()
nnoremap <silent> <Plug>SurroundRepeat .
nnoremap <silent> <Plug>(RepeatRedo) :call repeat#wrap("\<C-R>",v:count)
nnoremap <silent> <Plug>(RepeatUndoLine) :call repeat#wrap('U',v:count)
nnoremap <silent> <Plug>(RepeatUndo) :call repeat#wrap('u',v:count)
nnoremap <silent> <Plug>(RepeatDot) :exe repeat#run(v:count)
vnoremap <F1> :set invfullscreen
nnoremap <F1> :set invfullscreen
nmap <Nul> <Nop>
vmap <Nul> <Nop>
omap <Nul> <Nop>
xmap <BS> "-d
vmap <D-x> "*d
vmap <D-c> "*y
vmap <D-v> "-d"*P
nmap <D-v> "*P
imap S <Plug>ISurround
imap s <Plug>Isurround
inoremap <silent> 	 =UltiSnips#ExpandSnippetOrJump()
inoremap <expr>  pumvisible() ? "\" : "\"
inoremap <expr>  pumvisible() ? "\" : "\"
imap  <Plug>Isurround
let &cpo=s:cpo_save
unlet s:cpo_save
set background=dark
set backspace=indent,eol,start
set backupcopy=yes
set clipboard=unnamed
set completefunc=youcompleteme#CompleteFunc
set completeopt=menuone
set cpoptions=aAceFsB
set expandtab
set fileencodings=ucs-bom,utf-8,default,latin1
set foldlevelstart=20
set formatoptions=tcqrn1
set helplang=en
set hidden
set hlsearch
set ignorecase
set incsearch
set laststatus=2
set listchars=tab:▸\ ,eol:¬
set matchpairs=(:),{:},[:],<:>
set modelines=0
set ruler
set runtimepath=~/.vim,~/vim/plugged/vim-hardtime/,~/vim/plugged/vim-tmux-navigator/,~/vim/plugged/vim-repeat/,~/vim/plugged/vim-surround/,~/vim/plugged/ultisnips/,~/vim/plugged/vim-snippets/,~/vim/plugged/vim-system-copy/,~/vim/plugged/vim-jsdoc/,~/vim/plugged/auto-pairs/,~/vim/plugged/vim-prettier/,~/vim/plugged/vim-javascript/,~/vim/plugged/vim-jsx/,~/vim/plugged/vim2hs/,~/vim/plugged/vim-graphql/,~/vim/plugged/tabular/,~/vim/plugged/vim-markdown/,~/vim/plugged/indentline/,~/vim/plugged/syntastic/,~/vim/plugged/nerdtree/,~/vim/plugged/ctrlp.vim/,~/vim/plugged/YouCompleteMe/,~/vim/plugged/supertab/,~/vim/plugged/vimwiki/,~/vim/plugged/vim-fugitive/,~/vim/plugged/vim-gitgutter/,~/vim/plugged/vim-colors-solarized/,~/vim/plugged/vim-airline/,~/vim/plugged/vim-airline-themes/,~/vim/plugged/onedark.vim/,~/vim/plugged/ayu-vim/,~/vim/plugged/vim-workspace/,/usr/local/share/vim/vimfiles,/usr/local/share/vim/vim81,/usr/local/share/vim/vim81/pack/dist/opt/matchit,/usr/local/share/vim/vimfiles/after,~/vim/plugged/ultisnips/after,~/v
set scrolloff=3
set shiftwidth=4
set shortmess=filnxtToOc
set showcmd
set showmatch
set showtabline=2
set smartcase
set softtabstop=4
set tabline=%!airline#extensions#tabline#get()
set tabstop=4
set textwidth=79
set ttimeoutlen=0
set visualbell
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Workspace/ndash/ndash-client/app/containers
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +1 App/constants.js
argglobal
silent! argdel *
edit App/constants.js
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
let s:cpo_save=&cpo
set cpo&vim
inoremap <buffer> <silent> <BS> =AutoPairsDelete()
inoremap <buffer> <silent> <expr> <Right> TryKey('<Right>') ? '<Right>' : TooSoon('<RIGHT>','i')
inoremap <buffer> <silent> <expr> <Left> TryKey('<Left>') ? '<Left>' : TooSoon('<LEFT>','i')
inoremap <buffer> <silent> <expr> <Down> TryKey('<Down>') ? pumvisible() ? "\" : "\<Down>" : TooSoon('<DOWN>','i')
inoremap <buffer> <silent> <expr> <Up> TryKey('<Up>') ? pumvisible() ? "\" : "\<Up>" : TooSoon('<UP>','i')
xnoremap <buffer> <silent> <expr> + TryKey('+') ? '+' : TooSoon('+','x')
nnoremap <buffer> <silent> <expr> + TryKey('+') ? '+' : TooSoon('+','n')
nmap <buffer> ,hp <Plug>GitGutterPreviewHunk
nmap <buffer> ,hu <Plug>GitGutterUndoHunk
nmap <buffer> ,hs <Plug>GitGutterStageHunk
xnoremap <buffer> <silent> <expr> - TryKey('-') ? '-' : TooSoon('-','x')
nnoremap <buffer> <silent> <expr> - TryKey('-') ? '-' : TooSoon('-','n')
inoremap <buffer> <silent> § =AutoPairsMoveCharacter('''')
inoremap <buffer> <silent> ¢ =AutoPairsMoveCharacter('"')
inoremap <buffer> <silent> © =AutoPairsMoveCharacter(')')
inoremap <buffer> <silent> ¨ =AutoPairsMoveCharacter('(')
inoremap <buffer> <silent> î :call AutoPairsJump()a
inoremap <buffer> <silent> <expr> ð AutoPairsToggle()
inoremap <buffer> <silent> â =AutoPairsBackInsert()
inoremap <buffer> <silent> å =AutoPairsFastWrap()
inoremap <buffer> <silent> ý =AutoPairsMoveCharacter('}')
inoremap <buffer> <silent> û =AutoPairsMoveCharacter('{')
inoremap <buffer> <silent> Ý =AutoPairsMoveCharacter(']')
inoremap <buffer> <silent> Û =AutoPairsMoveCharacter('[')
nmap <buffer> [c <Plug>GitGutterPrevHunk
nmap <buffer> ]c <Plug>GitGutterNextHunk
xmap <buffer> ac <Plug>GitGutterTextObjectOuterVisual
omap <buffer> ac <Plug>GitGutterTextObjectOuterPending
xnoremap <buffer> <silent> <expr> h TryKey('h') ? 'h' : TooSoon('h','x')
nnoremap <buffer> <silent> <expr> h TryKey('h') ? 'h' : TooSoon('h','n')
xmap <buffer> ic <Plug>GitGutterTextObjectInnerVisual
omap <buffer> ic <Plug>GitGutterTextObjectInnerPending
xnoremap <buffer> <silent> <expr> j TryKey('j') ? 'j' : TooSoon('j','x')
nnoremap <buffer> <silent> <expr> j TryKey('j') ? 'gj' : TooSoon('j','n')
xnoremap <buffer> <silent> <expr> k TryKey('k') ? 'k' : TooSoon('k','x')
nnoremap <buffer> <silent> <expr> k TryKey('k') ? 'gk' : TooSoon('k','n')
xnoremap <buffer> <silent> <expr> l TryKey('l') ? 'l' : TooSoon('l','x')
nnoremap <buffer> <silent> <expr> l TryKey('l') ? 'l' : TooSoon('l','n')
xnoremap <buffer> <silent> <expr> <Right> TryKey('<Right>') ? '<Right>' : TooSoon('<RIGHT>','x')
xnoremap <buffer> <silent> <expr> <Left> TryKey('<Left>') ? '<Left>' : TooSoon('<LEFT>','x')
xnoremap <buffer> <silent> <expr> <Down> TryKey('<Down>') ? '<Down>' : TooSoon('<DOWN>','x')
xnoremap <buffer> <silent> <expr> <Up> TryKey('<Up>') ? '<Up>' : TooSoon('<UP>','x')
nnoremap <buffer> <silent> <expr> <Right> TryKey('<Right>') ? '<Right>' : TooSoon('<RIGHT>','n')
nnoremap <buffer> <silent> <expr> <Left> TryKey('<Left>') ? '<Left>' : TooSoon('<LEFT>','n')
nnoremap <buffer> <silent> <expr> <Down> TryKey('<Down>') ? '<Down>' : TooSoon('<DOWN>','n')
nnoremap <buffer> <silent> <expr> <Up> TryKey('<Up>') ? '<Up>' : TooSoon('<UP>','n')
nnoremap <buffer> <silent> <Plug>(jsdoc) :call jsdoc#insert()
inoremap <buffer> <silent>  =AutoPairsDelete()
inoremap <buffer> <silent>   =AutoPairsSpace()
inoremap <buffer> <silent> " =AutoPairsInsert('"')
inoremap <buffer> <silent> ' =AutoPairsInsert('''')
inoremap <buffer> <silent> ( =AutoPairsInsert('(')
inoremap <buffer> <silent> ) =AutoPairsInsert(')')
noremap <buffer> <silent> î :call AutoPairsJump()
noremap <buffer> <silent> ð :call AutoPairsToggle()
inoremap <buffer> <silent> [ =AutoPairsInsert('[')
inoremap <buffer> <silent> ] =AutoPairsInsert(']')
inoremap <buffer> <silent> ` =AutoPairsInsert('`')
inoremap <buffer> <silent> { =AutoPairsInsert('{')
inoremap <buffer> <silent> } =AutoPairsInsert('}')
let &cpo=s:cpo_save
unlet s:cpo_save
setlocal keymap=
setlocal noarabic
setlocal autoindent
setlocal backupcopy=
setlocal balloonexpr=
setlocal nobinary
setlocal nobreakindent
setlocal breakindentopt=
setlocal bufhidden=
setlocal buflisted
setlocal buftype=
setlocal nocindent
setlocal cinkeys=0{,0},0),:,0#,!^F,o,O,e
setlocal cinoptions=
setlocal cinwords=if,else,while,do,for,switch
setlocal colorcolumn=
setlocal comments=sO:*\ -,mO:*\ \ ,exO:*/,s1:/*,mb:*,ex:*/,://
setlocal commentstring=//%s
setlocal complete=.,w,b,u,t,i
setlocal concealcursor=inc
setlocal conceallevel=2
setlocal completefunc=youcompleteme#CompleteFunc
setlocal nocopyindent
setlocal cryptmethod=
setlocal nocursorbind
setlocal nocursorcolumn
set cursorline
setlocal cursorline
setlocal define=
setlocal dictionary=
setlocal nodiff
setlocal equalprg=
setlocal errorformat=
setlocal expandtab
if &filetype != 'javascript.jsx'
setlocal filetype=javascript.jsx
endif
setlocal fixendofline
setlocal foldcolumn=0
setlocal foldenable
setlocal foldexpr=0
setlocal foldignore=#
set foldlevel=1
setlocal foldlevel=20
setlocal foldmarker={{{,}}}
set foldmethod=syntax
setlocal foldmethod=syntax
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldtext=foldtext()
setlocal formatexpr=
setlocal formatoptions=n1croql
setlocal formatlistpat=^\\s*\\d\\+[\\]:.)}\\t\ ]\\s*
setlocal formatprg=
setlocal grepprg=
setlocal iminsert=0
setlocal imsearch=-1
setlocal include=
setlocal includeexpr=
setlocal indentexpr=GetJsxIndent()
setlocal indentkeys=0{,0},0),0],0,,!^F,o,O,e,*<Return>,<>>,<<>,/
setlocal noinfercase
setlocal iskeyword=@,48-57,_,192-255,$
setlocal keywordprg=
setlocal nolinebreak
setlocal nolisp
setlocal lispwords=
setlocal nolist
setlocal makeencoding=
setlocal makeprg=
setlocal matchpairs=(:),{:},[:],<:>
setlocal modeline
setlocal modifiable
setlocal nrformats=bin,octal,hex
set number
setlocal number
setlocal numberwidth=4
setlocal omnifunc=javascriptcomplete#CompleteJS
setlocal path=
setlocal nopreserveindent
setlocal nopreviewwindow
setlocal quoteescape=\\
setlocal noreadonly
set relativenumber
setlocal relativenumber
setlocal norightleft
setlocal rightleftcmd=search
setlocal noscrollbind
setlocal shiftwidth=4
setlocal noshortname
setlocal signcolumn=auto
setlocal nosmartindent
setlocal softtabstop=4
setlocal nospell
setlocal spellcapcheck=[.?!]\\_[\\])'\"\	\ ]\\+
setlocal spellfile=
setlocal spelllang=en
setlocal statusline=%!airline#statusline(1)
setlocal suffixesadd=.js,.jsx
setlocal swapfile
setlocal synmaxcol=3000
if &syntax != 'javascript.jsx'
setlocal syntax=javascript.jsx
endif
setlocal tabstop=4
setlocal tagcase=
setlocal tags=
setlocal termwinkey=
setlocal termwinscroll=10000
setlocal termwinsize=
setlocal textwidth=79
setlocal thesaurus=
setlocal noundofile
setlocal undolevels=-123456
setlocal varsofttabstop=
setlocal vartabstop=
setlocal nowinfixheight
setlocal nowinfixwidth
setlocal wrap
setlocal wrapmargin=0
let s:l = 1 - ((0 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
normal! 02|
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToOc
set winminheight=1 winminwidth=1
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
